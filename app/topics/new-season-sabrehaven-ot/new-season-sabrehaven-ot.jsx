import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-sabrehaven-ot');
}

export default function NewSeasonSabrehavenOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-sabrehaven-ot" />;
}
