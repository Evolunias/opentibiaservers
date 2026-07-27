import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eldera-guide');
}

export default function NewElderaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-eldera-guide" />;
}
