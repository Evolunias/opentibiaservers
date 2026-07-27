import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-98-no-reset-server');
}

export default function Sabrehaven1098NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-98-no-reset-server" />;
}
