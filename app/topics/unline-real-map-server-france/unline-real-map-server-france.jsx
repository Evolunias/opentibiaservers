import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map-server-france');
}

export default function UnlineRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map-server-france" />;
}
