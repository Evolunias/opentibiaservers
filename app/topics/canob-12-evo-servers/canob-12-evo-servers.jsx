import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-12-evo-servers');
}

export default function Canob12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="canob-12-evo-servers" />;
}
