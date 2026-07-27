import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-servers-brazil');
}

export default function PvpeServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvpe-servers-brazil" />;
}
