import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-servers-europe');
}

export default function SabrehavenCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-servers-europe" />;
}
