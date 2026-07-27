import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaorigins-rules');
}

export default function NewTibiaoriginsRulesKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaorigins-rules" />;
}
