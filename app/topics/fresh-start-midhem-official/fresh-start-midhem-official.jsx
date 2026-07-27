import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-midhem-official');
}

export default function FreshStartMidhemOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-midhem-official" />;
}
