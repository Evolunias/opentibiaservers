import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-72-evo-server');
}

export default function Tibiascape772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-72-evo-server" />;
}
