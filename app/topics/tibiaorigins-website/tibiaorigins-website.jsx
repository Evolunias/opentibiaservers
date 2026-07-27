import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-website');
}

export default function TibiaoriginsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-website" />;
}
