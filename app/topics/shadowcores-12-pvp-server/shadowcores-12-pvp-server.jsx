import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-12-pvp-server');
}

export default function Shadowcores12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-12-pvp-server" />;
}
