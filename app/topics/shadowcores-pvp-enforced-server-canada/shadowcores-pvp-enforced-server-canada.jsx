import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-enforced-server-canada');
}

export default function ShadowcoresPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-enforced-server-canada" />;
}
