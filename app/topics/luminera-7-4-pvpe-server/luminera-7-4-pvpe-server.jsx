import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-4-pvpe-server');
}

export default function Luminera74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-4-pvpe-server" />;
}
