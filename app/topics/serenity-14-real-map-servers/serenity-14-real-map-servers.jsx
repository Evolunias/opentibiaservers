import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-14-real-map-servers');
}

export default function Serenity14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-14-real-map-servers" />;
}
