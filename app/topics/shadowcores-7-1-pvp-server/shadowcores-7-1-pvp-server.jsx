import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-1-pvp-server');
}

export default function Shadowcores71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-1-pvp-server" />;
}
