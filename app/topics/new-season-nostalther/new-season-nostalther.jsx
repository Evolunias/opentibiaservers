import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nostalther');
}

export default function NewSeasonNostaltherKeywordPage() {
  return <StaticKeywordPage slug="new-season-nostalther" />;
}
