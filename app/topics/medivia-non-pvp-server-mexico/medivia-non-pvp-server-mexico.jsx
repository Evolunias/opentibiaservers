import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-non-pvp-server-mexico');
}

export default function MediviaNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="medivia-non-pvp-server-mexico" />;
}
