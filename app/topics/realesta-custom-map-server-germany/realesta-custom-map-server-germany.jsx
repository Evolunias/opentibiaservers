import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-custom-map-server-germany');
}

export default function RealestaCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realesta-custom-map-server-germany" />;
}
