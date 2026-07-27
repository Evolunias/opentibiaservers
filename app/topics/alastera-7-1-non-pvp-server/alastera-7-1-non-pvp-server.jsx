import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-1-non-pvp-server');
}

export default function Alastera71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-1-non-pvp-server" />;
}
