import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classicus-login');
}

export default function RealMapClassicusLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-classicus-login" />;
}
