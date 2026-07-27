import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaorigins-rules');
}

export default function BestTibiaoriginsRulesKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaorigins-rules" />;
}
