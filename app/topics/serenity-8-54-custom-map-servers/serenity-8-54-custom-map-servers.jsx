import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-54-custom-map-servers');
}

export default function Serenity854CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-54-custom-map-servers" />;
}
