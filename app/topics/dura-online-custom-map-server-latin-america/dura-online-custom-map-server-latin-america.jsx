import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-custom-map-server-latin-america');
}

export default function DuraOnlineCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-custom-map-server-latin-america" />;
}
