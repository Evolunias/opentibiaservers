import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-10-98-no-reset-server');
}

export default function Thaisot1098NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-10-98-no-reset-server" />;
}
