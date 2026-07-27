import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-noxiousot');
}

export default function RealMapNoxiousotKeywordPage() {
  return <StaticKeywordPage slug="real-map-noxiousot" />;
}
