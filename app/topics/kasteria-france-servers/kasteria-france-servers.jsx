import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-france-servers');
}

export default function KasteriaFranceServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-france-servers" />;
}
