import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-custom-map-server-poland');
}

export default function DuraOnlineCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="dura-online-custom-map-server-poland" />;
}
