import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvpe-server-latin-america');
}

export default function CyntaraPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvpe-server-latin-america" />;
}
