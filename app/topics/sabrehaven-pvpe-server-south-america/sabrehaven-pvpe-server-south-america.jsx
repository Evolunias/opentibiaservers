import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvpe-server-south-america');
}

export default function SabrehavenPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvpe-server-south-america" />;
}
