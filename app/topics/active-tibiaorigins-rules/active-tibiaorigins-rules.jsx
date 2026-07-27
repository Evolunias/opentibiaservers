import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaorigins-rules');
}

export default function ActiveTibiaoriginsRulesKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaorigins-rules" />;
}
