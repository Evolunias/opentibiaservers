import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibianus-client');
}

export default function NewSeasonTibianusClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibianus-client" />;
}
