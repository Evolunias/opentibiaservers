import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvpe');
}

export default function CyntaraPvpeKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvpe" />;
}
