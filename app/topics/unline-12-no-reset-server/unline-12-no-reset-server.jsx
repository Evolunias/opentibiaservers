import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-12-no-reset-server');
}

export default function Unline12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="unline-12-no-reset-server" />;
}
