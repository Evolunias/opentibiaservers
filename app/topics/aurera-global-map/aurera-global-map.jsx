import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-map');
}

export default function AureraGlobalMapKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-map" />;
}
