import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvpe-server-north-america');
}

export default function LumineraPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvpe-server-north-america" />;
}
