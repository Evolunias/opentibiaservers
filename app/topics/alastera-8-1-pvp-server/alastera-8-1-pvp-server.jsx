import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-1-pvp-server');
}

export default function Alastera81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-1-pvp-server" />;
}
