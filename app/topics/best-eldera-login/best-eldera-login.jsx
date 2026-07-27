import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eldera-login');
}

export default function BestElderaLoginKeywordPage() {
  return <StaticKeywordPage slug="best-eldera-login" />;
}
