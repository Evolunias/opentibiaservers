import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-custom-map-servers-germany');
}

export default function MistOfDeathCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-custom-map-servers-germany" />;
}
