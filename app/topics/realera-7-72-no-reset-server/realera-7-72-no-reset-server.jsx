import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-72-no-reset-server');
}

export default function Realera772NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-72-no-reset-server" />;
}
