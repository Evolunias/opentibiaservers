import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-12-real-map-servers');
}

export default function Serenity12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-12-real-map-servers" />;
}
