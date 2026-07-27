import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-0-non-pvp-server');
}

export default function Medivia100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-0-non-pvp-server" />;
}
