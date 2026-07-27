import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-0-no-reset-server');
}

export default function Eldera100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-0-no-reset-server" />;
}
