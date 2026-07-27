import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-alastera-server');
}

export default function PvpeAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-alastera-server" />;
}
