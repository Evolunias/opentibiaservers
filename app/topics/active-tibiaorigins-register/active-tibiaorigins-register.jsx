import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaorigins-register');
}

export default function ActiveTibiaoriginsRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaorigins-register" />;
}
