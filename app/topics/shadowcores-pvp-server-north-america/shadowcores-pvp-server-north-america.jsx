import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-server-north-america');
}

export default function ShadowcoresPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-server-north-america" />;
}
