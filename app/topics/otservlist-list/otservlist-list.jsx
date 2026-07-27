import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-list');
}

export default function OtservlistListKeywordPage() {
  return <StaticKeywordPage slug="otservlist-list" />;
}
