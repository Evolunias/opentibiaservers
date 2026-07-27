import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-noxiousot-official');
}

export default function RealMapNoxiousotOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-noxiousot-official" />;
}
