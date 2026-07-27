import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-yurots-ot-server');
}

export default function NewSeasonYurotsOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-yurots-ot-server" />;
}
