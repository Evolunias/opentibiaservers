import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-mist-of-death-register');
}

export default function TopMistOfDeathRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-mist-of-death-register" />;
}
