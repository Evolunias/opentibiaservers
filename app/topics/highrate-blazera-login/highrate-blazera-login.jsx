import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-blazera-login');
}

export default function HighrateBlazeraLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-blazera-login" />;
}
