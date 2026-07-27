import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-server-usa');
}

export default function ThaisotPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-server-usa" />;
}
