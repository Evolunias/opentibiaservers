import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-12-no-reset-server');
}

export default function Realera12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="realera-12-no-reset-server" />;
}
