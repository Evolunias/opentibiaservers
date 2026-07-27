import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-12-evo-server');
}

export default function Tibiara12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-12-evo-server" />;
}
