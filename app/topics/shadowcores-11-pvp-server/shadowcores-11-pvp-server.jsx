import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-11-pvp-server');
}

export default function Shadowcores11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-11-pvp-server" />;
}
