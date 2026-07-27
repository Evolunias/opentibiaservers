import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thaisot-official');
}

export default function OfficialThaisotOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-thaisot-official" />;
}
