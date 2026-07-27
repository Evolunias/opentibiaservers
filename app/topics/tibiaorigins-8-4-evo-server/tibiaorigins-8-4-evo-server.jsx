import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-4-evo-server');
}

export default function Tibiaorigins84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-4-evo-server" />;
}
