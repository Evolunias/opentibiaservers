import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-enforced-server-poland');
}

export default function ShadowcoresPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-enforced-server-poland" />;
}
