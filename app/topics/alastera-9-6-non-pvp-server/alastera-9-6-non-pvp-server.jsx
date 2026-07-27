import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-9-6-non-pvp-server');
}

export default function Alastera96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-9-6-non-pvp-server" />;
}
