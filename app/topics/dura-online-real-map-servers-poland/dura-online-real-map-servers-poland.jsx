import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-real-map-servers-poland');
}

export default function DuraOnlineRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="dura-online-real-map-servers-poland" />;
}
