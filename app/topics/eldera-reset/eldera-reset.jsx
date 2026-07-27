import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-reset');
}

export default function ElderaResetKeywordPage() {
  return <StaticKeywordPage slug="eldera-reset" />;
}
