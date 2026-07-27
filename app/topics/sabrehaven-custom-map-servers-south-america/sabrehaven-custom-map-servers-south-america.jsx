import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-servers-south-america');
}

export default function SabrehavenCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-servers-south-america" />;
}
