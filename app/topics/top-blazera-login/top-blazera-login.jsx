import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-blazera-login');
}

export default function TopBlazeraLoginKeywordPage() {
  return <StaticKeywordPage slug="top-blazera-login" />;
}
