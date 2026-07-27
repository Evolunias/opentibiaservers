import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-usa');
}

export default function OtlandUsaKeywordPage() {
  return <StaticKeywordPage slug="otland-usa" />;
}
