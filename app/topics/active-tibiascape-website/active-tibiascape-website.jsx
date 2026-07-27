import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiascape-website');
}

export default function ActiveTibiascapeWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-tibiascape-website" />;
}
