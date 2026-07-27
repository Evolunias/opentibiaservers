import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-carlinot-website');
}

export default function NewCarlinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-carlinot-website" />;
}
