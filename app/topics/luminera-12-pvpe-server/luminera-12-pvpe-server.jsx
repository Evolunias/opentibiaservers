import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-12-pvpe-server');
}

export default function Luminera12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-12-pvpe-server" />;
}
