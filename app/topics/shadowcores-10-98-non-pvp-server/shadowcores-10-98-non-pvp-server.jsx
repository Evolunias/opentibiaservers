import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-98-non-pvp-server');
}

export default function Shadowcores1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-98-non-pvp-server" />;
}
