import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-enforced-server-argentina');
}

export default function ShadowcoresPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-enforced-server-argentina" />;
}
