import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-madnessalive-register');
}

export default function PopularMadnessaliveRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-madnessalive-register" />;
}
