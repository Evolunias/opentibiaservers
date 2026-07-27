import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvpe');
}

export default function SabrehavenPvpeKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvpe" />;
}
