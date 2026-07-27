import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-uk-servers');
}

export default function RubinotUkServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-uk-servers" />;
}
