import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-evo-servers-brazil');
}

export default function UnlineEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="unline-evo-servers-brazil" />;
}
