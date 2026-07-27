import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-mist-of-death-register');
}

export default function NewMistOfDeathRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-mist-of-death-register" />;
}
