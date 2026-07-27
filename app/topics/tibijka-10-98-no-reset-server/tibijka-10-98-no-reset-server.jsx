import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-98-no-reset-server');
}

export default function Tibijka1098NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-98-no-reset-server" />;
}
