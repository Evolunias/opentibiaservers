import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaorigins-guide');
}

export default function OfficialTibiaoriginsGuideKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaorigins-guide" />;
}
