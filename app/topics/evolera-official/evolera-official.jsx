import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-official');
}

export default function EvoleraOfficialKeywordPage() {
  return <StaticKeywordPage slug="evolera-official" />;
}
