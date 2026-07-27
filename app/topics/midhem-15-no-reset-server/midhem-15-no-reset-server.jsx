import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-15-no-reset-server');
}

export default function Midhem15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-15-no-reset-server" />;
}
