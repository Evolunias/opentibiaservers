import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-xanteria-client');
}

export default function NewSeasonXanteriaClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-xanteria-client" />;
}
