import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-fresh-start-server-canada');
}

export default function NoxiousotFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-fresh-start-server-canada" />;
}
