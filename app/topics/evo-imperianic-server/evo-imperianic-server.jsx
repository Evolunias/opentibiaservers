import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-imperianic-server');
}

export default function EvoImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="evo-imperianic-server" />;
}
