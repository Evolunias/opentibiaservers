import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-uk-server');
}

export default function VenoreotUkServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-uk-server" />;
}
