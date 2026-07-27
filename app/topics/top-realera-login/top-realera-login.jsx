import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realera-login');
}

export default function TopRealeraLoginKeywordPage() {
  return <StaticKeywordPage slug="top-realera-login" />;
}
