import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-9-6-no-reset-server');
}

export default function Midhem96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-9-6-no-reset-server" />;
}
