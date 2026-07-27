import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaorigins-rules');
}

export default function TopTibiaoriginsRulesKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaorigins-rules" />;
}
