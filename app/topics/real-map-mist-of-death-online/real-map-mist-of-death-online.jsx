import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-mist-of-death-online');
}

export default function RealMapMistOfDeathOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-mist-of-death-online" />;
}
