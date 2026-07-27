import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-14-non-pvp-server');
}

export default function Medivia14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-14-non-pvp-server" />;
}
