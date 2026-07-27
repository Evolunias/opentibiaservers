import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-server-poland');
}

export default function RealeraPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-server-poland" />;
}
