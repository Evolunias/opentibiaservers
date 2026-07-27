import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-originaltibia-guide');
}

export default function NewOriginaltibiaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-originaltibia-guide" />;
}
