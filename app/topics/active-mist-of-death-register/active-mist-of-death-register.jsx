import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-mist-of-death-register');
}

export default function ActiveMistOfDeathRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-mist-of-death-register" />;
}
