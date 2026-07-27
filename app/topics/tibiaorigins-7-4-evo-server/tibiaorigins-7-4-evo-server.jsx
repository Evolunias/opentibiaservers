import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-4-evo-server');
}

export default function Tibiaorigins74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-4-evo-server" />;
}
