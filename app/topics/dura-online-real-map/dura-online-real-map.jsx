import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-real-map');
}

export default function DuraOnlineRealMapKeywordPage() {
  return <StaticKeywordPage slug="dura-online-real-map" />;
}
