import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-noxiousot');
}

export default function NewSeasonNoxiousotKeywordPage() {
  return <StaticKeywordPage slug="new-season-noxiousot" />;
}
