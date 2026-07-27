import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-0-evo-servers');
}

export default function Tibianus100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-0-evo-servers" />;
}
