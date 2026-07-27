import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-uk-servers');
}

export default function VenoreotUkServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-uk-servers" />;
}
