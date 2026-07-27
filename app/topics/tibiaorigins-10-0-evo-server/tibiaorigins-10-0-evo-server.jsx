import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-10-0-evo-server');
}

export default function Tibiaorigins100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-10-0-evo-server" />;
}
