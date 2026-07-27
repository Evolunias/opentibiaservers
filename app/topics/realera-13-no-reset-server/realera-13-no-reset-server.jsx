import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-13-no-reset-server');
}

export default function Realera13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="realera-13-no-reset-server" />;
}
