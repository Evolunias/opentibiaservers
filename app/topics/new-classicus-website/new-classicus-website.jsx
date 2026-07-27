import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classicus-website');
}

export default function NewClassicusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-classicus-website" />;
}
