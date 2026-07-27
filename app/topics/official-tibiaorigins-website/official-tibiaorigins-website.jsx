import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaorigins-website');
}

export default function OfficialTibiaoriginsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaorigins-website" />;
}
