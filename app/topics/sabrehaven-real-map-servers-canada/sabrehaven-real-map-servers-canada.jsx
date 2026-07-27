import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-servers-canada');
}

export default function SabrehavenRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-servers-canada" />;
}
