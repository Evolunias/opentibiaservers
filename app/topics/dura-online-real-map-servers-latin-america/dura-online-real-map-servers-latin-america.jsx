import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-real-map-servers-latin-america');
}

export default function DuraOnlineRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-real-map-servers-latin-america" />;
}
