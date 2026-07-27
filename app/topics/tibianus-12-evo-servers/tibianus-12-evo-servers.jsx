import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-12-evo-servers');
}

export default function Tibianus12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-12-evo-servers" />;
}
