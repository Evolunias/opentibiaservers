import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaorigins-rules');
}

export default function FreshStartTibiaoriginsRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaorigins-rules" />;
}
