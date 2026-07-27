import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-14-no-reset-server');
}

export default function Midhem14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-14-no-reset-server" />;
}
