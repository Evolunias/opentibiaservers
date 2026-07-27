import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaorigins-register');
}

export default function BestTibiaoriginsRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaorigins-register" />;
}
