import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvpe-server-brazil');
}

export default function TibiantisPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvpe-server-brazil" />;
}
