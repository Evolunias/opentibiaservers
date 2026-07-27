import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-0-pvpe-server');
}

export default function Luminera80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-0-pvpe-server" />;
}
