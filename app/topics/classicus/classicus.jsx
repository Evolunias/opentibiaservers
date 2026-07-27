import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus');
}

export default function ClassicusKeywordPage() {
  return <StaticKeywordPage slug="classicus" />;
}
