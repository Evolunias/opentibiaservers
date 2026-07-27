import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-11-non-pvp-server');
}

export default function Medivia11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-11-non-pvp-server" />;
}
