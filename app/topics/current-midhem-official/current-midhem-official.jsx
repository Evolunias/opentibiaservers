import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-midhem-official');
}

export default function CurrentMidhemOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-midhem-official" />;
}
