import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-6-no-reset-server');
}

export default function Eldera86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-6-no-reset-server" />;
}
