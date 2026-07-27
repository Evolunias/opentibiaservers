import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-non-pvp-server-france');
}

export default function MediviaNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="medivia-non-pvp-server-france" />;
}
