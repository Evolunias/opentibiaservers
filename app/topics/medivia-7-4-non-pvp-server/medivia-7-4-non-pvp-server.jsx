import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-4-non-pvp-server');
}

export default function Medivia74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-4-non-pvp-server" />;
}
