import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-4-evo-server');
}

export default function Tibiascape74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-4-evo-server" />;
}
