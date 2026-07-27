import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-servers-uk');
}

export default function SabrehavenCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-servers-uk" />;
}
