import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-4-evo-servers');
}

export default function Tibianus74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-4-evo-servers" />;
}
