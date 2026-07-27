import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaorigins-rules');
}

export default function CurrentTibiaoriginsRulesKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaorigins-rules" />;
}
