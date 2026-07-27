import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-9-6-evo-servers');
}

export default function Tibianus96EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-9-6-evo-servers" />;
}
