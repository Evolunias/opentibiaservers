import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-uk-server');
}

export default function TibiameUkServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-uk-server" />;
}
