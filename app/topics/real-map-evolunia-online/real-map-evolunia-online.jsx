import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolunia-online');
}

export default function RealMapEvoluniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolunia-online" />;
}
