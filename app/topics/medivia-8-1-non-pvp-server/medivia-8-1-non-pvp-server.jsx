import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-1-non-pvp-server');
}

export default function Medivia81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-1-non-pvp-server" />;
}
