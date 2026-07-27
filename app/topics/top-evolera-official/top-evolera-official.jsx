import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolera-official');
}

export default function TopEvoleraOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-evolera-official" />;
}
