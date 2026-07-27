import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eldera-guide');
}

export default function ActiveElderaGuideKeywordPage() {
  return <StaticKeywordPage slug="active-eldera-guide" />;
}
