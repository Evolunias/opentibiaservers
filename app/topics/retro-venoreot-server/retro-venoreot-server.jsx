import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-venoreot-server');
}

export default function RetroVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="retro-venoreot-server" />;
}
