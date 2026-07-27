import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvpe-server-mexico');
}

export default function SabrehavenPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvpe-server-mexico" />;
}
