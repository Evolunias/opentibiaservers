import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-uk-server');
}

export default function RubinotUkServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-uk-server" />;
}
