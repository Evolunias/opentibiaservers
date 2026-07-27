import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-servers-france');
}

export default function CyntaraCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-servers-france" />;
}
