import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibiara-server');
}

export default function EvoTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="evo-tibiara-server" />;
}
