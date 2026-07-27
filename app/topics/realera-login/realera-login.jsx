import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-login');
}

export default function RealeraLoginKeywordPage() {
  return <StaticKeywordPage slug="realera-login" />;
}
