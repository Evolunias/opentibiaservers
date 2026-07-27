import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-sabrehaven-private-server');
}

export default function NewSeasonSabrehavenPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-sabrehaven-private-server" />;
}
