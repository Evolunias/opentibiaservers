import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-enforced-server-poland');
}

export default function RealeraPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-enforced-server-poland" />;
}
