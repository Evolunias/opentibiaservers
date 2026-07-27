import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-custom-map-server-south-america');
}

export default function MistOfDeathCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-custom-map-server-south-america" />;
}
