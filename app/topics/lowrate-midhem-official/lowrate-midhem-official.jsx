import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-midhem-official');
}

export default function LowrateMidhemOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-midhem-official" />;
}
