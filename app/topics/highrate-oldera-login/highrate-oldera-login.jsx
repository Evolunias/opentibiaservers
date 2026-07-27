import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oldera-login');
}

export default function HighrateOlderaLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-oldera-login" />;
}
