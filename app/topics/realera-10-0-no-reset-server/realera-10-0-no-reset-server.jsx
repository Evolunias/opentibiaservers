import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-0-no-reset-server');
}

export default function Realera100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="realera-10-0-no-reset-server" />;
}
