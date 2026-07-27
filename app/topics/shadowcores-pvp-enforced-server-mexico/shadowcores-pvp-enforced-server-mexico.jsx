import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-enforced-server-mexico');
}

export default function ShadowcoresPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-enforced-server-mexico" />;
}
