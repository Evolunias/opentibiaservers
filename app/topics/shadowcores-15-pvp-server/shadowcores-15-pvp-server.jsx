import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-15-pvp-server');
}

export default function Shadowcores15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-15-pvp-server" />;
}
