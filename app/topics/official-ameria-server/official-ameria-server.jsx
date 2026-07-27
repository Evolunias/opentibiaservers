import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ameria-server');
}

export default function OfficialAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="official-ameria-server" />;
}
