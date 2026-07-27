import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-14-non-pvp-server');
}

export default function Alastera14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-14-non-pvp-server" />;
}
