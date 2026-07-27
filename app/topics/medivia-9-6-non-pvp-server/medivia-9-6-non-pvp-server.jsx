import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-9-6-non-pvp-server');
}

export default function Medivia96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-9-6-non-pvp-server" />;
}
