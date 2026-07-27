import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-ots');
}

export default function ElderaOtsKeywordPage() {
  return <StaticKeywordPage slug="eldera-ots" />;
}
