import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-servers-brazil');
}

export default function EvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="evo-servers-brazil" />;
}
