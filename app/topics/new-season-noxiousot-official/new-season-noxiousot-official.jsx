import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-noxiousot-official');
}

export default function NewSeasonNoxiousotOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-noxiousot-official" />;
}
