import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-blazera-login');
}

export default function CustomBlazeraLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-blazera-login" />;
}
