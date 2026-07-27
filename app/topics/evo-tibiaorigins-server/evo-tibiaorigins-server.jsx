import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibiaorigins-server');
}

export default function EvoTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="evo-tibiaorigins-server" />;
}
