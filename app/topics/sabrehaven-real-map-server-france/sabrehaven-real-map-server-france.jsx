import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-server-france');
}

export default function SabrehavenRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-server-france" />;
}
