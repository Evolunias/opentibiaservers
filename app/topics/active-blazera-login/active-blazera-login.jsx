import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-blazera-login');
}

export default function ActiveBlazeraLoginKeywordPage() {
  return <StaticKeywordPage slug="active-blazera-login" />;
}
