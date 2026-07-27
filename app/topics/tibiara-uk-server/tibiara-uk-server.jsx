import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-uk-server');
}

export default function TibiaraUkServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-uk-server" />;
}
