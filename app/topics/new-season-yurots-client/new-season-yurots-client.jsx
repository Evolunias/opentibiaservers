import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-yurots-client');
}

export default function NewSeasonYurotsClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-yurots-client" />;
}
