import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolera-official');
}

export default function BestEvoleraOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-evolera-official" />;
}
