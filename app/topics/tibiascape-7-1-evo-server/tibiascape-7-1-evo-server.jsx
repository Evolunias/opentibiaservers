import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-1-evo-server');
}

export default function Tibiascape71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-1-evo-server" />;
}
