import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-4-evo-server');
}

export default function Tibiascape84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-4-evo-server" />;
}
