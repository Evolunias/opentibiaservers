import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-72-evo-server');
}

export default function Tibiaorigins772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-72-evo-server" />;
}
