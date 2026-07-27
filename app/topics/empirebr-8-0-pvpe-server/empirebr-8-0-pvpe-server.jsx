import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-0-pvpe-server');
}

export default function Empirebr80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-0-pvpe-server" />;
}
