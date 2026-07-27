import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-14-no-reset-server');
}

export default function Eldera14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-14-no-reset-server" />;
}
