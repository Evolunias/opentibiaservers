import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ameria-client');
}

export default function OfficialAmeriaClientKeywordPage() {
  return <StaticKeywordPage slug="official-ameria-client" />;
}
