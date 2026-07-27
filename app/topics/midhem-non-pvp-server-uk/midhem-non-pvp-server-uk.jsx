import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-non-pvp-server-uk');
}

export default function MidhemNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="midhem-non-pvp-server-uk" />;
}
