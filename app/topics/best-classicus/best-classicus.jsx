import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classicus');
}

export default function BestClassicusKeywordPage() {
  return <StaticKeywordPage slug="best-classicus" />;
}
