import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-aurera-global-official');
}

export default function RealMapAureraGlobalOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-aurera-global-official" />;
}
