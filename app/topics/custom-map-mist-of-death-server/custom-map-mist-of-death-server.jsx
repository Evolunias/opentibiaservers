import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-mist-of-death-server');
}

export default function CustomMapMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-mist-of-death-server" />;
}
