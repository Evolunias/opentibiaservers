import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-xanteria-server');
}

export default function NewSeasonXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-xanteria-server" />;
}
