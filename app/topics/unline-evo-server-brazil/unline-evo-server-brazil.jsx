import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-evo-server-brazil');
}

export default function UnlineEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="unline-evo-server-brazil" />;
}
