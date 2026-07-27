import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-72-pvpe-server');
}

export default function Luminera772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-72-pvpe-server" />;
}
