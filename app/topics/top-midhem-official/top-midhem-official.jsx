import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-midhem-official');
}

export default function TopMidhemOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-midhem-official" />;
}
