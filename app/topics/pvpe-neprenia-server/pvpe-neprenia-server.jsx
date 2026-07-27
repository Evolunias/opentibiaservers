import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-neprenia-server');
}

export default function PvpeNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-neprenia-server" />;
}
