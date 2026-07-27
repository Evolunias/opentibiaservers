import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-sweden-server');
}

export default function ElderaSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-sweden-server" />;
}
