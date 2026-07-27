import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-servers-uk');
}

export default function SabrehavenRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-servers-uk" />;
}
