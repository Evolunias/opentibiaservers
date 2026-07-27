import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvpe-server-latin-america');
}

export default function SabrehavenPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvpe-server-latin-america" />;
}
