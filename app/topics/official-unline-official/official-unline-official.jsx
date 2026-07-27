import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-unline-official');
}

export default function OfficialUnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-unline-official" />;
}
