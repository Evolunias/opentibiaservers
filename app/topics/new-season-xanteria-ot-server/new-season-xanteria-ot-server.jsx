import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-xanteria-ot-server');
}

export default function NewSeasonXanteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-xanteria-ot-server" />;
}
