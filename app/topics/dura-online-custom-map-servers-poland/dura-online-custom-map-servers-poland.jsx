import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-custom-map-servers-poland');
}

export default function DuraOnlineCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="dura-online-custom-map-servers-poland" />;
}
