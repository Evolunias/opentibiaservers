import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-13-real-map-server');
}

export default function Serenity13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-13-real-map-server" />;
}
