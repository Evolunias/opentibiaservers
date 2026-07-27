import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-54-non-pvp-server');
}

export default function Alastera854NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-54-non-pvp-server" />;
}
