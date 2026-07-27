import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-14-non-pvp-server');
}

export default function Midhem14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-14-non-pvp-server" />;
}
