import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibiara-servers');
}

export default function EvoTibiaraServersKeywordPage() {
  return <StaticKeywordPage slug="evo-tibiara-servers" />;
}
