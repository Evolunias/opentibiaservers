import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eldera-login');
}

export default function HighrateElderaLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-eldera-login" />;
}
