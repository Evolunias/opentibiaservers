import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-12-no-reset-server');
}

export default function Eldera12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-12-no-reset-server" />;
}
