import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaorigins-register');
}

export default function CurrentTibiaoriginsRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaorigins-register" />;
}
