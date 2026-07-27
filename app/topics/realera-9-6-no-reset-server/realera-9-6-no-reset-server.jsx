import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-9-6-no-reset-server');
}

export default function Realera96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="realera-9-6-no-reset-server" />;
}
