import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-map');
}

export default function OriginaltibiaMapKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-map" />;
}
