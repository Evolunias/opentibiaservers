import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-4-pvp-server');
}

export default function Alastera84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-4-pvp-server" />;
}
