import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-1-no-reset-server');
}

export default function Eldera81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-1-no-reset-server" />;
}
