import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-non-pvp-server-sweden');
}

export default function ShadowcoresNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-non-pvp-server-sweden" />;
}
