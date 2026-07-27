import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-non-pvp-server-argentina');
}

export default function AlasteraNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="alastera-non-pvp-server-argentina" />;
}
