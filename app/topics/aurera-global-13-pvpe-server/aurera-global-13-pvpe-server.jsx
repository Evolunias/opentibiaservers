import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-13-pvpe-server');
}

export default function AureraGlobal13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-13-pvpe-server" />;
}
