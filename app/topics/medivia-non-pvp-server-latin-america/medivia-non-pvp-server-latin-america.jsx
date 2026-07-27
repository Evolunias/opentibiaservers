import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-non-pvp-server-latin-america');
}

export default function MediviaNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-non-pvp-server-latin-america" />;
}
