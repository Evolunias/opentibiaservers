import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-12-non-pvp-server');
}

export default function Unline12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-12-non-pvp-server" />;
}
