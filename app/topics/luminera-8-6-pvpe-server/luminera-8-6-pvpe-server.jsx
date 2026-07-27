import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-6-pvpe-server');
}

export default function Luminera86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-6-pvpe-server" />;
}
