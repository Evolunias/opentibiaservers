import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-0-evo-server');
}

export default function Tibiascape100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-0-evo-server" />;
}
