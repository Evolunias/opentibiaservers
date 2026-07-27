import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-xanteria-official');
}

export default function NewSeasonXanteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-xanteria-official" />;
}
