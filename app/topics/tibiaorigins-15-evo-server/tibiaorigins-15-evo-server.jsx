import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-15-evo-server');
}

export default function Tibiaorigins15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-15-evo-server" />;
}
