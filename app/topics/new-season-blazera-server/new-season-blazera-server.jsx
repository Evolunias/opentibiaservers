import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-blazera-server');
}

export default function NewSeasonBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-blazera-server" />;
}
