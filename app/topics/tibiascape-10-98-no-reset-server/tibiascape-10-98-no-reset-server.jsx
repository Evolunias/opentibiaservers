import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-98-no-reset-server');
}

export default function Tibiascape1098NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-98-no-reset-server" />;
}
