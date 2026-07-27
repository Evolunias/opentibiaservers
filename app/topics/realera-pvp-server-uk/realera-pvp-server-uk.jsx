import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-server-uk');
}

export default function RealeraPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-server-uk" />;
}
