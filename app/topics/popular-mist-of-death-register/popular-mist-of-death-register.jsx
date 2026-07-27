import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-mist-of-death-register');
}

export default function PopularMistOfDeathRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-mist-of-death-register" />;
}
