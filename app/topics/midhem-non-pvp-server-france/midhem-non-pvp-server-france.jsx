import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-non-pvp-server-france');
}

export default function MidhemNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="midhem-non-pvp-server-france" />;
}
