import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-madnessalive-register');
}

export default function BestMadnessaliveRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-madnessalive-register" />;
}
