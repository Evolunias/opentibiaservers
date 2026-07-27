import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-6-evo-server');
}

export default function Tibiascape76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-6-evo-server" />;
}
