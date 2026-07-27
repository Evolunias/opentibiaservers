import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-server-mexico');
}

export default function MidhemPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-server-mexico" />;
}
