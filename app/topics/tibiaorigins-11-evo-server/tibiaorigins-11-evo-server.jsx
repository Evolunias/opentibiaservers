import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-11-evo-server');
}

export default function Tibiaorigins11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-11-evo-server" />;
}
