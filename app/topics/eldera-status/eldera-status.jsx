import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-status');
}

export default function ElderaStatusKeywordPage() {
  return <StaticKeywordPage slug="eldera-status" />;
}
