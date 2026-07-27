import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eldera-login');
}

export default function FreshStartElderaLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eldera-login" />;
}
