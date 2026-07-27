import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-client');
}

export default function ElderaClientKeywordPage() {
  return <StaticKeywordPage slug="eldera-client" />;
}
