import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-4-pvp-server');
}

export default function Shadowcores74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-4-pvp-server" />;
}
