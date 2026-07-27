import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-server-argentina');
}

export default function ThaisotPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-server-argentina" />;
}
