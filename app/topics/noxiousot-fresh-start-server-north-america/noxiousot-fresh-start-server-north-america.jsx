import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-fresh-start-server-north-america');
}

export default function NoxiousotFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-fresh-start-server-north-america" />;
}
