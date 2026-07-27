import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-10-98-evo-servers');
}

export default function Tibiaorigins1098EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-10-98-evo-servers" />;
}
