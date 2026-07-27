import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-14-evo-servers');
}

export default function Tibiaorigins14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-14-evo-servers" />;
}
