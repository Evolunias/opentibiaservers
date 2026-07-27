import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-custom-map-servers-uk');
}

export default function OxygenotCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-custom-map-servers-uk" />;
}
