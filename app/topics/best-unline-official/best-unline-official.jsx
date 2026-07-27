import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-unline-official');
}

export default function BestUnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-unline-official" />;
}
