import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-1-evo-server');
}

export default function Tibiascape81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-1-evo-server" />;
}
