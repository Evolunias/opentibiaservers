import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-10-0-real-map-servers');
}

export default function Serenity100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-10-0-real-map-servers" />;
}
