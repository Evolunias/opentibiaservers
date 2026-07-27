import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-6-evo-servers');
}

export default function Tibiaorigins76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-6-evo-servers" />;
}
