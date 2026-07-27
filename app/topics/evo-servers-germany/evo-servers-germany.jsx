import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-servers-germany');
}

export default function EvoServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="evo-servers-germany" />;
}
