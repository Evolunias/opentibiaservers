import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-register');
}

export default function MadnessaliveRegisterKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-register" />;
}
