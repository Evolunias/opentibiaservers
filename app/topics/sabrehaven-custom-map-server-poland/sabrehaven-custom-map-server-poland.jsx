import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-server-poland');
}

export default function SabrehavenCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-server-poland" />;
}
