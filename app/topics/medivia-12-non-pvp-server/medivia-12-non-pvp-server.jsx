import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-12-non-pvp-server');
}

export default function Medivia12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-12-non-pvp-server" />;
}
