import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ameria-ot-server');
}

export default function NewSeasonAmeriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-ameria-ot-server" />;
}
