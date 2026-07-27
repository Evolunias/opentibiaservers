import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nilot-official');
}

export default function RealMapNilotOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-nilot-official" />;
}
