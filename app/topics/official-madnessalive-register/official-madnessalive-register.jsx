import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-madnessalive-register');
}

export default function OfficialMadnessaliveRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-madnessalive-register" />;
}
