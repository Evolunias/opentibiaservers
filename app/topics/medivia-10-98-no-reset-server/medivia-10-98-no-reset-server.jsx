import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-98-no-reset-server');
}

export default function Medivia1098NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-98-no-reset-server" />;
}
