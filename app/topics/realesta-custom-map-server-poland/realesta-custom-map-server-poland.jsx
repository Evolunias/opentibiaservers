import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-custom-map-server-poland');
}

export default function RealestaCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realesta-custom-map-server-poland" />;
}
