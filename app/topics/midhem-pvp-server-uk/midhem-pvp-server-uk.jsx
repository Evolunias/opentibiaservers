import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-server-uk');
}

export default function MidhemPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-server-uk" />;
}
