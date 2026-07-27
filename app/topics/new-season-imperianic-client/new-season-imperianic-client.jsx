import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-imperianic-client');
}

export default function NewSeasonImperianicClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-imperianic-client" />;
}
