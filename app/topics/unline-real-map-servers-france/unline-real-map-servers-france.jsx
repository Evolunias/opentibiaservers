import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map-servers-france');
}

export default function UnlineRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map-servers-france" />;
}
