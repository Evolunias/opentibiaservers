import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eldera-login');
}

export default function CurrentElderaLoginKeywordPage() {
  return <StaticKeywordPage slug="current-eldera-login" />;
}
