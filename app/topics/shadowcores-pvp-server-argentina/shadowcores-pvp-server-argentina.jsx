import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-server-argentina');
}

export default function ShadowcoresPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-server-argentina" />;
}
