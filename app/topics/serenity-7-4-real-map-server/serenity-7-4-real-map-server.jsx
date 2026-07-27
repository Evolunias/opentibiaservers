import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-4-real-map-server');
}

export default function Serenity74RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-4-real-map-server" />;
}
