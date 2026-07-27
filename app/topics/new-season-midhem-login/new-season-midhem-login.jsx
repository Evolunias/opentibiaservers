import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-midhem-login');
}

export default function NewSeasonMidhemLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-midhem-login" />;
}
