import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-0-non-pvp-server');
}

export default function Alastera100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-0-non-pvp-server" />;
}
