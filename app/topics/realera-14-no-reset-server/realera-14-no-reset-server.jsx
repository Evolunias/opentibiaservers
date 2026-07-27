import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-14-no-reset-server');
}

export default function Realera14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="realera-14-no-reset-server" />;
}
