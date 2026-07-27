import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-4-evo-servers');
}

export default function Tibianus84EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-4-evo-servers" />;
}
