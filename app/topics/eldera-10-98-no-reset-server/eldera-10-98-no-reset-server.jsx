import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-98-no-reset-server');
}

export default function Eldera1098NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-98-no-reset-server" />;
}
