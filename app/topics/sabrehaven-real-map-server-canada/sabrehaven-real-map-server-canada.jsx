import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-server-canada');
}

export default function SabrehavenRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-server-canada" />;
}
