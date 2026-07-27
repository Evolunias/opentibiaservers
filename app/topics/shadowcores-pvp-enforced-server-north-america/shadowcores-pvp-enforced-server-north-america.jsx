import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-enforced-server-north-america');
}

export default function ShadowcoresPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-enforced-server-north-america" />;
}
