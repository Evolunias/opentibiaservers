import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibijka-ot-server');
}

export default function NewSeasonTibijkaOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibijka-ot-server" />;
}
