import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-4-no-reset-server');
}

export default function Eldera84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-4-no-reset-server" />;
}
