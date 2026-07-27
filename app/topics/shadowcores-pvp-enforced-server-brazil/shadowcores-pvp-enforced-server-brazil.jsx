import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-enforced-server-brazil');
}

export default function ShadowcoresPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-enforced-server-brazil" />;
}
