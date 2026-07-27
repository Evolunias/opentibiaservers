import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-unline-official');
}

export default function CurrentUnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-unline-official" />;
}
