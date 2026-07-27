import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiantis-website');
}

export default function NewTibiantisWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-tibiantis-website" />;
}
