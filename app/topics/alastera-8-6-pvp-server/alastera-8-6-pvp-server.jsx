import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-6-pvp-server');
}

export default function Alastera86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-6-pvp-server" />;
}
