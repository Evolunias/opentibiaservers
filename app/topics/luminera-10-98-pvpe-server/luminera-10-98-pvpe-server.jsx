import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-10-98-pvpe-server');
}

export default function Luminera1098PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-10-98-pvpe-server" />;
}
