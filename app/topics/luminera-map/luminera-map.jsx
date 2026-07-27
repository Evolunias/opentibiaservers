import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-map');
}

export default function LumineraMapKeywordPage() {
  return <StaticKeywordPage slug="luminera-map" />;
}
