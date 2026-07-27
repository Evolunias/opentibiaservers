import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-active');
}

export default function OtservlistActiveKeywordPage() {
  return <StaticKeywordPage slug="otservlist-active" />;
}
