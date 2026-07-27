import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolera-official');
}

export default function PopularEvoleraOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-evolera-official" />;
}
