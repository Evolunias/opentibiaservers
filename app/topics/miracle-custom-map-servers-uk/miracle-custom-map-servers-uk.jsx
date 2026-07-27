import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-custom-map-servers-uk');
}

export default function MiracleCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="miracle-custom-map-servers-uk" />;
}
