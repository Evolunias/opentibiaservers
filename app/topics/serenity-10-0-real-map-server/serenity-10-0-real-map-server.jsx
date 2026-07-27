import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-10-0-real-map-server');
}

export default function Serenity100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-10-0-real-map-server" />;
}
