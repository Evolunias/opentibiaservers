import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-4-no-reset-server');
}

export default function Midhem74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-4-no-reset-server" />;
}
