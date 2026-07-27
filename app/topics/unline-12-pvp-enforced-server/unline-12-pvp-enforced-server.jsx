import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-12-pvp-enforced-server');
}

export default function Unline12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="unline-12-pvp-enforced-server" />;
}
