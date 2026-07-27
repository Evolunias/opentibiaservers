import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-real-map-server-latin-america');
}

export default function DuraOnlineRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-real-map-server-latin-america" />;
}
