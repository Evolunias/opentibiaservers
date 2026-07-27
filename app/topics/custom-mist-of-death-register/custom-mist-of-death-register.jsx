import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-mist-of-death-register');
}

export default function CustomMistOfDeathRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-mist-of-death-register" />;
}
