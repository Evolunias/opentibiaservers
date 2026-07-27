import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-unline-official');
}

export default function PopularUnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-unline-official" />;
}
