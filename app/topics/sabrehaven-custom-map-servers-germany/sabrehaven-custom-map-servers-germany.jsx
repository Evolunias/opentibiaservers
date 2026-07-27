import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-servers-germany');
}

export default function SabrehavenCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-servers-germany" />;
}
