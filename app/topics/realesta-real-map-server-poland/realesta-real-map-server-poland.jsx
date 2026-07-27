import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-real-map-server-poland');
}

export default function RealestaRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realesta-real-map-server-poland" />;
}
