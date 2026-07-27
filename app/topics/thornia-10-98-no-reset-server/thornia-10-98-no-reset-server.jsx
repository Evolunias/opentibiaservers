import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-10-98-no-reset-server');
}

export default function Thornia1098NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-10-98-no-reset-server" />;
}
