import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-noxiousot-server');
}

export default function NewSeasonNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-noxiousot-server" />;
}
