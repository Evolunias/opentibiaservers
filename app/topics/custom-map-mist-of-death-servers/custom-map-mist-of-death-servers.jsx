import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-mist-of-death-servers');
}

export default function CustomMapMistOfDeathServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-mist-of-death-servers" />;
}
