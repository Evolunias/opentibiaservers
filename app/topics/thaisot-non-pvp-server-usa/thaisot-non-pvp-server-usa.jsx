import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-non-pvp-server-usa');
}

export default function ThaisotNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-non-pvp-server-usa" />;
}
