import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-uk-server');
}

export default function CarlinotUkServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-uk-server" />;
}
