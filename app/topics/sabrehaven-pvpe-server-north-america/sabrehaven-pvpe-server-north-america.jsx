import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvpe-server-north-america');
}

export default function SabrehavenPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvpe-server-north-america" />;
}
