import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-sweden-servers');
}

export default function ElderaSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-sweden-servers" />;
}
