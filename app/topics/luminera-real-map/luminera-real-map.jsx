import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-real-map');
}

export default function LumineraRealMapKeywordPage() {
  return <StaticKeywordPage slug="luminera-real-map" />;
}
