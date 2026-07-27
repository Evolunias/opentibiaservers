import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaorigins-website');
}

export default function NewTibiaoriginsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaorigins-website" />;
}
