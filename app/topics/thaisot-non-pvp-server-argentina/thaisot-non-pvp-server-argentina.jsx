import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-non-pvp-server-argentina');
}

export default function ThaisotNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-non-pvp-server-argentina" />;
}
