import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-server-south-america');
}

export default function SabrehavenRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-server-south-america" />;
}
