import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-login');
}

export default function ElderaLoginKeywordPage() {
  return <StaticKeywordPage slug="eldera-login" />;
}
