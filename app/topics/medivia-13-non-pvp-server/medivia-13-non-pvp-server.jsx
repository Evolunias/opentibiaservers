import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-13-non-pvp-server');
}

export default function Medivia13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-13-non-pvp-server" />;
}
