import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-xanteria');
}

export default function NewSeasonXanteriaKeywordPage() {
  return <StaticKeywordPage slug="new-season-xanteria" />;
}
