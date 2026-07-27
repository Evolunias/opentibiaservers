import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map');
}

export default function SabrehavenRealMapKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map" />;
}
