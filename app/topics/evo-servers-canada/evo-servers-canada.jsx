import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-servers-canada');
}

export default function EvoServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="evo-servers-canada" />;
}
