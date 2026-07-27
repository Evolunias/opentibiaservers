import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-servers-france');
}

export default function SabrehavenCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-servers-france" />;
}
