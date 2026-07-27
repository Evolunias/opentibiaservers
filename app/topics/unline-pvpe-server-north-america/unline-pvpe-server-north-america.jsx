import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvpe-server-north-america');
}

export default function UnlinePvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-pvpe-server-north-america" />;
}
