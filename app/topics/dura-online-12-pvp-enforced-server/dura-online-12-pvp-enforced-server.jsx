import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-12-pvp-enforced-server');
}

export default function DuraOnline12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-12-pvp-enforced-server" />;
}
