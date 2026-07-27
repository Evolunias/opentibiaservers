import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-12-non-pvp-server');
}

export default function DuraOnline12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-12-non-pvp-server" />;
}
