import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-midhem');
}

export default function NewSeasonMidhemKeywordPage() {
  return <StaticKeywordPage slug="new-season-midhem" />;
}
