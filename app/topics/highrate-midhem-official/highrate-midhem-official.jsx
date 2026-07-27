import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-midhem-official');
}

export default function HighrateMidhemOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-midhem-official" />;
}
