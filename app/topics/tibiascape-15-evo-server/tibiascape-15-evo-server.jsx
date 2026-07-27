import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-15-evo-server');
}

export default function Tibiascape15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-15-evo-server" />;
}
