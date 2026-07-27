import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-server-germany');
}

export default function InfernalOtCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-server-germany" />;
}
