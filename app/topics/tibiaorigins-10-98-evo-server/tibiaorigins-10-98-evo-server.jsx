import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-10-98-evo-server');
}

export default function Tibiaorigins1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-10-98-evo-server" />;
}
