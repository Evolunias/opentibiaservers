import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-midhem-ots');
}

export default function NewSeasonMidhemOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-midhem-ots" />;
}
