import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-custom-map-servers-europe');
}

export default function RealestaCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="realesta-custom-map-servers-europe" />;
}
