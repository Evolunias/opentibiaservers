import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvp-server-poland');
}

export default function RealestaPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvp-server-poland" />;
}
