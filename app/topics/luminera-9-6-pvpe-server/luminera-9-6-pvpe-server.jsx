import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-9-6-pvpe-server');
}

export default function Luminera96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-9-6-pvpe-server" />;
}
