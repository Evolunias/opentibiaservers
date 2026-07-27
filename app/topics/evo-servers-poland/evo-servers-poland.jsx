import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-servers-poland');
}

export default function EvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="evo-servers-poland" />;
}
