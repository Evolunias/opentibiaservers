import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-madnessalive-register');
}

export default function ActiveMadnessaliveRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-madnessalive-register" />;
}
