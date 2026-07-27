import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-non-pvp-server-north-america');
}

export default function MediviaNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-non-pvp-server-north-america" />;
}
