import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-12-no-reset-server');
}

export default function DuraOnline12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-12-no-reset-server" />;
}
