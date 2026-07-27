import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-4-non-pvp-server');
}

export default function Tibianus84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-4-non-pvp-server" />;
}
