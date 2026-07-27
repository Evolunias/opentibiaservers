import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-98-evo-server');
}

export default function Tibiascape1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-98-evo-server" />;
}
