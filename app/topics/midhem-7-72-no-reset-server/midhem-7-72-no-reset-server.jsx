import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-72-no-reset-server');
}

export default function Midhem772NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-72-no-reset-server" />;
}
