import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oldera-login');
}

export default function LowrateOlderaLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oldera-login" />;
}
