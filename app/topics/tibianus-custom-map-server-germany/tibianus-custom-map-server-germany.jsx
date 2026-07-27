import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-custom-map-server-germany');
}

export default function TibianusCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibianus-custom-map-server-germany" />;
}
