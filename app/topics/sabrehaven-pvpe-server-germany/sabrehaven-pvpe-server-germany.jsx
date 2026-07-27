import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvpe-server-germany');
}

export default function SabrehavenPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvpe-server-germany" />;
}
