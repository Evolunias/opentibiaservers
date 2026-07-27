import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-map');
}

export default function DuraOnlineMapKeywordPage() {
  return <StaticKeywordPage slug="dura-online-map" />;
}
