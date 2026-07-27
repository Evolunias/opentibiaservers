import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-xanteria-login');
}

export default function NewSeasonXanteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-xanteria-login" />;
}
