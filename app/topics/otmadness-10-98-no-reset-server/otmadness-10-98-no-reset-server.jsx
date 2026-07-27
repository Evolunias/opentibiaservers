import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-98-no-reset-server');
}

export default function Otmadness1098NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-98-no-reset-server" />;
}
