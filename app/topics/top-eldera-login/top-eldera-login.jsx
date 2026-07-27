import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eldera-login');
}

export default function TopElderaLoginKeywordPage() {
  return <StaticKeywordPage slug="top-eldera-login" />;
}
