import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classicus-official');
}

export default function RealMapClassicusOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-classicus-official" />;
}
