import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolera-official');
}

export default function FreshStartEvoleraOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolera-official" />;
}
