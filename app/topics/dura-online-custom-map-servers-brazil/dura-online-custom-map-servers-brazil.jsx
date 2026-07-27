import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-custom-map-servers-brazil');
}

export default function DuraOnlineCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="dura-online-custom-map-servers-brazil" />;
}
