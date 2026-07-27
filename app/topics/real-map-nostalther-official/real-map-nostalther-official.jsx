import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nostalther-official');
}

export default function RealMapNostaltherOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-nostalther-official" />;
}
