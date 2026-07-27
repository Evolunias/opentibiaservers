import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-midhem-official');
}

export default function BestMidhemOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-midhem-official" />;
}
