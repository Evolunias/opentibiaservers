import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nostalther-ot');
}

export default function NewSeasonNostaltherOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-nostalther-ot" />;
}
