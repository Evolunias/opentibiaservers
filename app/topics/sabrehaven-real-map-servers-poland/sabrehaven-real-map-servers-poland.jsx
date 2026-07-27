import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-servers-poland');
}

export default function SabrehavenRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-servers-poland" />;
}
