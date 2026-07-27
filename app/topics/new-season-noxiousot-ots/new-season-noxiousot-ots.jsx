import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-noxiousot-ots');
}

export default function NewSeasonNoxiousotOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-noxiousot-ots" />;
}
