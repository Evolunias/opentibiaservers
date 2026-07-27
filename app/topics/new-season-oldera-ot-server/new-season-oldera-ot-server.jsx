import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oldera-ot-server');
}

export default function NewSeasonOlderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-oldera-ot-server" />;
}
