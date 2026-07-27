import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-12-no-reset-server');
}

export default function Midhem12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-12-no-reset-server" />;
}
