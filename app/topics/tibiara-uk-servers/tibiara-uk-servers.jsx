import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-uk-servers');
}

export default function TibiaraUkServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-uk-servers" />;
}
