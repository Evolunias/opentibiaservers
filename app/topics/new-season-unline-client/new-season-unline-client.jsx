import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-unline-client');
}

export default function NewSeasonUnlineClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-unline-client" />;
}
