import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvpe-server-canada');
}

export default function LumineraPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvpe-server-canada" />;
}
