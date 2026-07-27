import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-1-evo-servers');
}

export default function Tibianus81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-1-evo-servers" />;
}
