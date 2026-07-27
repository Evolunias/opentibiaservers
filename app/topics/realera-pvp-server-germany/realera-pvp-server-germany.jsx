import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-server-germany');
}

export default function RealeraPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-server-germany" />;
}
