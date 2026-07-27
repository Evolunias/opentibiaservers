import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-10-98-non-pvp-server');
}

export default function Oxygenot1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-10-98-non-pvp-server" />;
}
