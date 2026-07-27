import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eldera-login');
}

export default function PopularElderaLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-eldera-login" />;
}
