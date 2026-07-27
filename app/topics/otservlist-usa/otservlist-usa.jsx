import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-usa');
}

export default function OtservlistUsaKeywordPage() {
  return <StaticKeywordPage slug="otservlist-usa" />;
}
