import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-madnessalive-register');
}

export default function LowrateMadnessaliveRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-madnessalive-register" />;
}
