import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-6-no-reset-server');
}

export default function Midhem86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-6-no-reset-server" />;
}
