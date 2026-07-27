import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaorigins-register');
}

export default function PopularTibiaoriginsRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaorigins-register" />;
}
