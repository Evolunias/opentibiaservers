import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-6-pvpe-server');
}

export default function Luminera76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-6-pvpe-server" />;
}
