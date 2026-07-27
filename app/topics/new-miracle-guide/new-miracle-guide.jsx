import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-miracle-guide');
}

export default function NewMiracleGuideKeywordPage() {
  return <StaticKeywordPage slug="new-miracle-guide" />;
}
