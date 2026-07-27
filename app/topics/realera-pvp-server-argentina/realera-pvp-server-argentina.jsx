import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-server-argentina');
}

export default function RealeraPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-server-argentina" />;
}
