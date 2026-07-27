import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-11-evo-server');
}

export default function Tibiascape11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-11-evo-server" />;
}
