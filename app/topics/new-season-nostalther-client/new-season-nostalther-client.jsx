import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nostalther-client');
}

export default function NewSeasonNostaltherClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-nostalther-client" />;
}
