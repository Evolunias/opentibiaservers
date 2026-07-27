import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-aurera-global-ot-server');
}

export default function NewSeasonAureraGlobalOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-aurera-global-ot-server" />;
}
