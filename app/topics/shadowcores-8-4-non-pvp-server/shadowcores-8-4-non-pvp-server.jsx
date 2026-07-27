import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-4-non-pvp-server');
}

export default function Shadowcores84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-4-non-pvp-server" />;
}
