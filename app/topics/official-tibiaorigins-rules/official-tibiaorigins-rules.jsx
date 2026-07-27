import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaorigins-rules');
}

export default function OfficialTibiaoriginsRulesKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaorigins-rules" />;
}
