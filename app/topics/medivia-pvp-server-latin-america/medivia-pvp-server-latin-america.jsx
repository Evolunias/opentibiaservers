import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-server-latin-america');
}

export default function MediviaPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-server-latin-america" />;
}
