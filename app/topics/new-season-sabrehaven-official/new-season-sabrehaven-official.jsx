import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-sabrehaven-official');
}

export default function NewSeasonSabrehavenOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-sabrehaven-official" />;
}
