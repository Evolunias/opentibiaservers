import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-madnessalive-register');
}

export default function CustomMadnessaliveRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-madnessalive-register" />;
}
