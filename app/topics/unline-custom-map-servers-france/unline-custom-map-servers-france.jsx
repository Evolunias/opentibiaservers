import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-custom-map-servers-france');
}

export default function UnlineCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="unline-custom-map-servers-france" />;
}
