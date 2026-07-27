import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvpe-server-mexico');
}

export default function UnlinePvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="unline-pvpe-server-mexico" />;
}
