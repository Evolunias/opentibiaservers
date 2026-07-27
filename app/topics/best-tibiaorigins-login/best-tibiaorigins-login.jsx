import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaorigins-login');
}

export default function BestTibiaoriginsLoginKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaorigins-login" />;
}
