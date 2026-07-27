import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-15-no-reset-server');
}

export default function Realera15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="realera-15-no-reset-server" />;
}
