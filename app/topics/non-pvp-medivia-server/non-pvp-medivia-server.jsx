import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-medivia-server');
}

export default function NonPvpMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-medivia-server" />;
}
