import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-xanteria-ot');
}

export default function NewSeasonXanteriaOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-xanteria-ot" />;
}
