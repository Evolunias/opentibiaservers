import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-real-map-servers-germany');
}

export default function InfernalOtRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-real-map-servers-germany" />;
}
