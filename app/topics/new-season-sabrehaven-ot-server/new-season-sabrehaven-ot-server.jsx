import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-sabrehaven-ot-server');
}

export default function NewSeasonSabrehavenOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-sabrehaven-ot-server" />;
}
