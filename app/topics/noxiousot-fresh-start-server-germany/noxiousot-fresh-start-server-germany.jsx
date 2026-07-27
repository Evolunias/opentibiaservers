import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-fresh-start-server-germany');
}

export default function NoxiousotFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-fresh-start-server-germany" />;
}
