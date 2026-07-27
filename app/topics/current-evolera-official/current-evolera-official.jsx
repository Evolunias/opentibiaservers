import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolera-official');
}

export default function CurrentEvoleraOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-evolera-official" />;
}
