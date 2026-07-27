import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-custom-map-servers-brazil');
}

export default function RealeraCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="realera-custom-map-servers-brazil" />;
}
