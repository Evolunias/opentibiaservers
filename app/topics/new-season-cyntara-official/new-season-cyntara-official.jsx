import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-cyntara-official');
}

export default function NewSeasonCyntaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-cyntara-official" />;
}
