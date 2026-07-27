import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibianus-ot-server');
}

export default function NewSeasonTibianusOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibianus-ot-server" />;
}
