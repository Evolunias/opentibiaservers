import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-server-germany');
}

export default function SabrehavenCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-server-germany" />;
}
