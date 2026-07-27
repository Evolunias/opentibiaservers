import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-54-non-pvp-server');
}

export default function Midhem854NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-54-non-pvp-server" />;
}
