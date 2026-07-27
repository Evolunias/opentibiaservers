import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvpe-server-mexico');
}

export default function LumineraPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvpe-server-mexico" />;
}
