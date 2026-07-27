import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-real-map-servers-poland');
}

export default function RealestaRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="realesta-real-map-servers-poland" />;
}
