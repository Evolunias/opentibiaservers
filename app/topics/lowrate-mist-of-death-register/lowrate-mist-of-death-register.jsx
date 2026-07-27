import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-mist-of-death-register');
}

export default function LowrateMistOfDeathRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-mist-of-death-register" />;
}
