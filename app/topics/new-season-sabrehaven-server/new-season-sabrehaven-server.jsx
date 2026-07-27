import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-sabrehaven-server');
}

export default function NewSeasonSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-sabrehaven-server" />;
}
