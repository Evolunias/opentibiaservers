import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-custom-map-servers-south-america');
}

export default function MistOfDeathCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-custom-map-servers-south-america" />;
}
