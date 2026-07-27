import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-enforced-server-latin-america');
}

export default function MediviaPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-enforced-server-latin-america" />;
}
