import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-cyntara-ots');
}

export default function NewSeasonCyntaraOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-cyntara-ots" />;
}
