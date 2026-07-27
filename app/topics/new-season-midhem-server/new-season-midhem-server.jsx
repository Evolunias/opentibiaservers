import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-midhem-server');
}

export default function NewSeasonMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-midhem-server" />;
}
