import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-72-custom-map-servers');
}

export default function Serenity772CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-72-custom-map-servers" />;
}
