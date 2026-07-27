import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiascape-website');
}

export default function NewTibiascapeWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-tibiascape-website" />;
}
