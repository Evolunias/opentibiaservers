import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-server-europe');
}

export default function InfernalOtCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-server-europe" />;
}
