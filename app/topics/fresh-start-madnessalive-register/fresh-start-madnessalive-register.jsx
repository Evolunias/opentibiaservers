import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-madnessalive-register');
}

export default function FreshStartMadnessaliveRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-madnessalive-register" />;
}
