import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-non-pvp-server-mexico');
}

export default function MidhemNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="midhem-non-pvp-server-mexico" />;
}
