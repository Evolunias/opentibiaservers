import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-imperianic-ot-server');
}

export default function NewSeasonImperianicOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-imperianic-ot-server" />;
}
