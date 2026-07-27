import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-sabrehaven');
}

export default function NewSeasonSabrehavenKeywordPage() {
  return <StaticKeywordPage slug="new-season-sabrehaven" />;
}
