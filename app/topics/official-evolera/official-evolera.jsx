import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolera');
}

export default function OfficialEvoleraKeywordPage() {
  return <StaticKeywordPage slug="official-evolera" />;
}
