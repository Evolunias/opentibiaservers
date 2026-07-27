import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-rules');
}

export default function TibiaoriginsRulesKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-rules" />;
}
