import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nostalther-ots');
}

export default function NewSeasonNostaltherOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-nostalther-ots" />;
}
