import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-enforced-server-uk');
}

export default function ShadowcoresPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-enforced-server-uk" />;
}
