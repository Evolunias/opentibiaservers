import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-10-98-no-reset-server');
}

export default function Midhem1098NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-10-98-no-reset-server" />;
}
