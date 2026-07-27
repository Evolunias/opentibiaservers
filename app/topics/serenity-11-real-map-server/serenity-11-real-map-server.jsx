import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-11-real-map-server');
}

export default function Serenity11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-11-real-map-server" />;
}
