import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-1-evo-server');
}

export default function Tibiaorigins71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-1-evo-server" />;
}
