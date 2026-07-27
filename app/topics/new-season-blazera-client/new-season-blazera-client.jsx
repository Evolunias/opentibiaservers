import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-blazera-client');
}

export default function NewSeasonBlazeraClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-blazera-client" />;
}
