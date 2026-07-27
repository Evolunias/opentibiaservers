import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map-server-brazil');
}

export default function UnlineRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map-server-brazil" />;
}
