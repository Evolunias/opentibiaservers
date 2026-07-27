import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-4-pvpe-server');
}

export default function Luminera84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-4-pvpe-server" />;
}
