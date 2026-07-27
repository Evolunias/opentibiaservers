import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-high-exp-server-north-america');
}

export default function NoxiousotHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-high-exp-server-north-america" />;
}
