import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realera-login');
}

export default function CustomRealeraLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-realera-login" />;
}
