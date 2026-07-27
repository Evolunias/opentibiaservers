import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-custom-map-servers-poland');
}

export default function OxygenotCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-custom-map-servers-poland" />;
}
