import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-servers-south-america');
}

export default function SabrehavenRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-servers-south-america" />;
}
