import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-noxiousot-client');
}

export default function NewSeasonNoxiousotClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-noxiousot-client" />;
}
