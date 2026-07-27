import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-eldera-server');
}

export default function PvpeElderaServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-eldera-server" />;
}
