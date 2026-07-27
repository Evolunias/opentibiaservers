import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaorigins-register');
}

export default function TopTibiaoriginsRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaorigins-register" />;
}
