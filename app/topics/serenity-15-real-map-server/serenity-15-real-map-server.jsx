import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-15-real-map-server');
}

export default function Serenity15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-15-real-map-server" />;
}
