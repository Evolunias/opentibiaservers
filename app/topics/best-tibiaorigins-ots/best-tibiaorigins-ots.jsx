import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaorigins-ots');
}

export default function BestTibiaoriginsOtsKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaorigins-ots" />;
}
