import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-custom-map-servers-brazil');
}

export default function MidhemCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="midhem-custom-map-servers-brazil" />;
}
