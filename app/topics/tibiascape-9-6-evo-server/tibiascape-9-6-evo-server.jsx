import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-9-6-evo-server');
}

export default function Tibiascape96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-9-6-evo-server" />;
}
