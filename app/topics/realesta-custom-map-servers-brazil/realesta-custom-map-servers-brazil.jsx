import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-custom-map-servers-brazil');
}

export default function RealestaCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="realesta-custom-map-servers-brazil" />;
}
