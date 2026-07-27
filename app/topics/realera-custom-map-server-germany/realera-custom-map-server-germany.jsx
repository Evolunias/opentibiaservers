import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-custom-map-server-germany');
}

export default function RealeraCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realera-custom-map-server-germany" />;
}
