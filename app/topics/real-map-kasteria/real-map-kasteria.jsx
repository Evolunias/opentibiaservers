import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-kasteria');
}

export default function RealMapKasteriaKeywordPage() {
  return <StaticKeywordPage slug="real-map-kasteria" />;
}
