import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaorigins-register');
}

export default function LowrateTibiaoriginsRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaorigins-register" />;
}
