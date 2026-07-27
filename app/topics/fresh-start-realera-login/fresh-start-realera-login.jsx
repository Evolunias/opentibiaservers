import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realera-login');
}

export default function FreshStartRealeraLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realera-login" />;
}
