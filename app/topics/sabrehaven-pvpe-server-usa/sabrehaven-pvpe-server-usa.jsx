import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvpe-server-usa');
}

export default function SabrehavenPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvpe-server-usa" />;
}
