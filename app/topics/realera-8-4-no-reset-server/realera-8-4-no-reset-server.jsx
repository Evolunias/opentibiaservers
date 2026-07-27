import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-4-no-reset-server');
}

export default function Realera84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-4-no-reset-server" />;
}
