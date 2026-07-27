import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaorigins-website');
}

export default function CustomTibiaoriginsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaorigins-website" />;
}
