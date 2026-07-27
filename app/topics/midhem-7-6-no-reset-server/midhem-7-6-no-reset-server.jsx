import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-6-no-reset-server');
}

export default function Midhem76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-6-no-reset-server" />;
}
