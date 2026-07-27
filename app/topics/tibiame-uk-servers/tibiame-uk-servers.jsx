import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-uk-servers');
}

export default function TibiameUkServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-uk-servers" />;
}
