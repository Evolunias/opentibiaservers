import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-server-poland');
}

export default function SabrehavenRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-server-poland" />;
}
