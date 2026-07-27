import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-xanteria-ots');
}

export default function NewSeasonXanteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-xanteria-ots" />;
}
