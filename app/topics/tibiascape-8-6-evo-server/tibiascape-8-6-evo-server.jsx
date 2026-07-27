import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-6-evo-server');
}

export default function Tibiascape86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-6-evo-server" />;
}
