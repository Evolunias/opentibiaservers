import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaorigins-rules');
}

export default function CustomTibiaoriginsRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaorigins-rules" />;
}
