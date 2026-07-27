import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-server-usa');
}

export default function ShadowcoresPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-server-usa" />;
}
