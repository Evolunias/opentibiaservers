import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaorigins-ot');
}

export default function BestTibiaoriginsOtKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaorigins-ot" />;
}
