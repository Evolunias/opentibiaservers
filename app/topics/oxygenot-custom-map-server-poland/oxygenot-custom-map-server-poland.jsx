import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-custom-map-server-poland');
}

export default function OxygenotCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-custom-map-server-poland" />;
}
