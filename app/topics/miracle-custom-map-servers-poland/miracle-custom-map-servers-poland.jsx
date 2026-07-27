import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-custom-map-servers-poland');
}

export default function MiracleCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="miracle-custom-map-servers-poland" />;
}
