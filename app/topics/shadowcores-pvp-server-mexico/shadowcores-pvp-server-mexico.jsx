import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-server-mexico');
}

export default function ShadowcoresPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-server-mexico" />;
}
