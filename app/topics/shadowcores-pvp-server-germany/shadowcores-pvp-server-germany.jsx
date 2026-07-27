import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-server-germany');
}

export default function ShadowcoresPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-server-germany" />;
}
