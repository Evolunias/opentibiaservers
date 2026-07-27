import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classicus-servers');
}

export default function RealMapClassicusServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-classicus-servers" />;
}
