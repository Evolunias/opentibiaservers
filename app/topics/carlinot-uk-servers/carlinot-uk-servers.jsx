import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-uk-servers');
}

export default function CarlinotUkServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-uk-servers" />;
}
