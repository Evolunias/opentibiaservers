import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-11-no-reset-server');
}

export default function Midhem11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-11-no-reset-server" />;
}
