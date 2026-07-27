import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-10-0-pvpe-server');
}

export default function Luminera100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-10-0-pvpe-server" />;
}
