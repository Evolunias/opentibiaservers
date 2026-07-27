import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-server-france');
}

export default function SabrehavenCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-server-france" />;
}
