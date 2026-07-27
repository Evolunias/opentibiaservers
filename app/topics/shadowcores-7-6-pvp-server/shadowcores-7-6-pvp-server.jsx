import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-6-pvp-server');
}

export default function Shadowcores76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-6-pvp-server" />;
}
