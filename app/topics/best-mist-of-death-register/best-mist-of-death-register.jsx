import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-mist-of-death-register');
}

export default function BestMistOfDeathRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-mist-of-death-register" />;
}
