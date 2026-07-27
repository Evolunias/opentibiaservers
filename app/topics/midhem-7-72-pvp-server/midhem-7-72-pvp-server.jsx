import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-72-pvp-server');
}

export default function Midhem772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-72-pvp-server" />;
}
