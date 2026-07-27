import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realera-login');
}

export default function CurrentRealeraLoginKeywordPage() {
  return <StaticKeywordPage slug="current-realera-login" />;
}
