import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaorigins-rules');
}

export default function PopularTibiaoriginsRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaorigins-rules" />;
}
