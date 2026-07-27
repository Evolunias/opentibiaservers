import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realera-login');
}

export default function BestRealeraLoginKeywordPage() {
  return <StaticKeywordPage slug="best-realera-login" />;
}
