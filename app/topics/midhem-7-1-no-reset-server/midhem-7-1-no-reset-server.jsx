import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-1-no-reset-server');
}

export default function Midhem71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-1-no-reset-server" />;
}
