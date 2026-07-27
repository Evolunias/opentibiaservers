import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibiaorigins-servers');
}

export default function EvoTibiaoriginsServersKeywordPage() {
  return <StaticKeywordPage slug="evo-tibiaorigins-servers" />;
}
