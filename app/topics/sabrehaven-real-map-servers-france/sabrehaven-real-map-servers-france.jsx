import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-servers-france');
}

export default function SabrehavenRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-servers-france" />;
}
