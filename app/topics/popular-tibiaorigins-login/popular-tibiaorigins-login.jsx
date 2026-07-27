import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaorigins-login');
}

export default function PopularTibiaoriginsLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaorigins-login" />;
}
