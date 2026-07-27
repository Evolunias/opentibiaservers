import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-blazera-login');
}

export default function BestBlazeraLoginKeywordPage() {
  return <StaticKeywordPage slug="best-blazera-login" />;
}
