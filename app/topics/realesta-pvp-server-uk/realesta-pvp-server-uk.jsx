import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvp-server-uk');
}

export default function RealestaPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvp-server-uk" />;
}
