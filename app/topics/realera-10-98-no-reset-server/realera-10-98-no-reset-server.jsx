import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-98-no-reset-server');
}

export default function Realera1098NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="realera-10-98-no-reset-server" />;
}
