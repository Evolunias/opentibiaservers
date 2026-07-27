import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolera-official');
}

export default function OfficialEvoleraOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-evolera-official" />;
}
