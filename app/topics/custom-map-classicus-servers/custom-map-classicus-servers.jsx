import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-classicus-servers');
}

export default function CustomMapClassicusServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-classicus-servers" />;
}
