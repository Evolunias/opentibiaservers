import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-servers-poland');
}

export default function SabrehavenCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-servers-poland" />;
}
