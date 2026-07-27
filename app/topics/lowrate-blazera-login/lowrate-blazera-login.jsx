import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-blazera-login');
}

export default function LowrateBlazeraLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-blazera-login" />;
}
