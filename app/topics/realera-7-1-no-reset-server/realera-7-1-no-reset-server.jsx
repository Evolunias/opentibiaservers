import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-1-no-reset-server');
}

export default function Realera71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-1-no-reset-server" />;
}
