import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-13-pvpe-server');
}

export default function Luminera13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-13-pvpe-server" />;
}
