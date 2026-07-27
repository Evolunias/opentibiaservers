import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-france-server');
}

export default function KasteriaFranceServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-france-server" />;
}
