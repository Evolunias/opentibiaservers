import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realesta-client');
}

export default function NewSeasonRealestaClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-realesta-client" />;
}
