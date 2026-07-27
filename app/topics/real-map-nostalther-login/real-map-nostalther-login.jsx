import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nostalther-login');
}

export default function RealMapNostaltherLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-nostalther-login" />;
}
