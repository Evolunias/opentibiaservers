import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-poland');
}

export default function OtservlistPolandKeywordPage() {
  return <StaticKeywordPage slug="otservlist-poland" />;
}
