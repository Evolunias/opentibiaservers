import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-client-germany');
}

export default function EvoClientGermanyKeywordPage() {
  return <StaticKeywordPage slug="evo-client-germany" />;
}
