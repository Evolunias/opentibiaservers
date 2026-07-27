import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-non-pvp-server-usa');
}

export default function AlasteraNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="alastera-non-pvp-server-usa" />;
}
