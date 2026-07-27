import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-4-no-reset-server');
}

export default function Realera74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-4-no-reset-server" />;
}
