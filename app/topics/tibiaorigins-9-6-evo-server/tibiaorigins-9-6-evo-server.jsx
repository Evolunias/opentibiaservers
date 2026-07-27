import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-9-6-evo-server');
}

export default function Tibiaorigins96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-9-6-evo-server" />;
}
