import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-15-evo-servers');
}

export default function Tibiaorigins15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-15-evo-servers" />;
}
