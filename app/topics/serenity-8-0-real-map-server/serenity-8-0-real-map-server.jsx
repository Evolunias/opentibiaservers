import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-0-real-map-server');
}

export default function Serenity80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-0-real-map-server" />;
}
