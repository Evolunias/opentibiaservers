import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-54-evo-server');
}

export default function Tibiara854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-54-evo-server" />;
}
