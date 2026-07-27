import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-server-france');
}

export default function MidhemPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-server-france" />;
}
