import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-13-evo-server');
}

export default function Tibiascape13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-13-evo-server" />;
}
