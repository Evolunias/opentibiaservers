import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-carlinot');
}

export default function NewCarlinotKeywordPage() {
  return <StaticKeywordPage slug="new-carlinot" />;
}
