import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-custom-map-servers-uk');
}

export default function RealestaCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="realesta-custom-map-servers-uk" />;
}
