import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realera-login');
}

export default function LowrateRealeraLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realera-login" />;
}
