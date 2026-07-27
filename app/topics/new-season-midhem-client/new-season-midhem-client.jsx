import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-midhem-client');
}

export default function NewSeasonMidhemClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-midhem-client" />;
}
