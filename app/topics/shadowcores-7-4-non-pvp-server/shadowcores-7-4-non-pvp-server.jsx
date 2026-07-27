import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-4-non-pvp-server');
}

export default function Shadowcores74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-4-non-pvp-server" />;
}
