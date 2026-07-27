import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-enforced-server-usa');
}

export default function ShadowcoresPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-enforced-server-usa" />;
}
