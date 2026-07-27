import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classicus-ot-server');
}

export default function NewSeasonClassicusOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-classicus-ot-server" />;
}
