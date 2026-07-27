import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-unline-official');
}

export default function TopUnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-unline-official" />;
}
