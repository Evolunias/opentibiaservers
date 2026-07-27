import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-sabrehaven-ots');
}

export default function NewSeasonSabrehavenOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-sabrehaven-ots" />;
}
