import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eldera-login');
}

export default function LowrateElderaLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eldera-login" />;
}
