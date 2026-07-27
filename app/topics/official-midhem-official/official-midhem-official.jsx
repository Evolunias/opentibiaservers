import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-midhem-official');
}

export default function OfficialMidhemOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-midhem-official" />;
}
