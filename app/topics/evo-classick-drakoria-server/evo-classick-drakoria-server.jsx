import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-classick-drakoria-server');
}

export default function EvoClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="evo-classick-drakoria-server" />;
}
