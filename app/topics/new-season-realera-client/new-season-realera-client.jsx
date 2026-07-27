import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realera-client');
}

export default function NewSeasonRealeraClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-realera-client" />;
}
