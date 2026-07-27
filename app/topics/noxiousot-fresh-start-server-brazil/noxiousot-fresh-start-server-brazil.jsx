import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-fresh-start-server-brazil');
}

export default function NoxiousotFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-fresh-start-server-brazil" />;
}
