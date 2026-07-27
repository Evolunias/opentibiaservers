import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaorigins-register');
}

export default function NewTibiaoriginsRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaorigins-register" />;
}
