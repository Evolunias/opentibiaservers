import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-14-pvp-server');
}

export default function Shadowcores14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-14-pvp-server" />;
}
