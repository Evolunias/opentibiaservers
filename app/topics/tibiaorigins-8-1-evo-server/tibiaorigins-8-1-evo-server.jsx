import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-1-evo-server');
}

export default function Tibiaorigins81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-1-evo-server" />;
}
