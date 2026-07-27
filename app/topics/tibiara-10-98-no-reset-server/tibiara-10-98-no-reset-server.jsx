import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-98-no-reset-server');
}

export default function Tibiara1098NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-98-no-reset-server" />;
}
