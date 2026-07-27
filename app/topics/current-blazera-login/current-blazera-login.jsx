import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-blazera-login');
}

export default function CurrentBlazeraLoginKeywordPage() {
  return <StaticKeywordPage slug="current-blazera-login" />;
}
