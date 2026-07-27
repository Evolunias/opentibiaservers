import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-cyntara');
}

export default function NewSeasonCyntaraKeywordPage() {
  return <StaticKeywordPage slug="new-season-cyntara" />;
}
