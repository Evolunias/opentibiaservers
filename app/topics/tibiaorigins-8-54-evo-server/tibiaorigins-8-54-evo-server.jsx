import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-54-evo-server');
}

export default function Tibiaorigins854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-54-evo-server" />;
}
