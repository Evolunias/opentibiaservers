import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvpe-server-brazil');
}

export default function LumineraPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvpe-server-brazil" />;
}
