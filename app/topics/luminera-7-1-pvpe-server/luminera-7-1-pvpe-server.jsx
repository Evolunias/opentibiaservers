import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-1-pvpe-server');
}

export default function Luminera71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-1-pvpe-server" />;
}
