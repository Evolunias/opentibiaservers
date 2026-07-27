import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-13-non-pvp-server');
}

export default function Alastera13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-13-non-pvp-server" />;
}
