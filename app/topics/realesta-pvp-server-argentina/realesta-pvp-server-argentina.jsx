import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvp-server-argentina');
}

export default function RealestaPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvp-server-argentina" />;
}
