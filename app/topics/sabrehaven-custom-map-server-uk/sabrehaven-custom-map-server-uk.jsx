import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-server-uk');
}

export default function SabrehavenCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-server-uk" />;
}
