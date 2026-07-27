import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-servers-poland');
}

export default function RealeraRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-servers-poland" />;
}
