import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-98-no-reset-server');
}

export default function Oldera1098NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-98-no-reset-server" />;
}
