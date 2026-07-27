import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibianus-guide');
}

export default function NewTibianusGuideKeywordPage() {
  return <StaticKeywordPage slug="new-tibianus-guide" />;
}
