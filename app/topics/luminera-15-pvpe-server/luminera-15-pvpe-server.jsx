import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-15-pvpe-server');
}

export default function Luminera15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-15-pvpe-server" />;
}
