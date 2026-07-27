import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-11-pvpe-server');
}

export default function Luminera11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-11-pvpe-server" />;
}
