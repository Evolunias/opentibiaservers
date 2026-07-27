import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-1-evo-servers');
}

export default function Tibianus71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-1-evo-servers" />;
}
