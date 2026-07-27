import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvpe-server-canada');
}

export default function SabrehavenPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvpe-server-canada" />;
}
