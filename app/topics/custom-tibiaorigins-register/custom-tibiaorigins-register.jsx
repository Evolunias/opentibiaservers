import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaorigins-register');
}

export default function CustomTibiaoriginsRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaorigins-register" />;
}
