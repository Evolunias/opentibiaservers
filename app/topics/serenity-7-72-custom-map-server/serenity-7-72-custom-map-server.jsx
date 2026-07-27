import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-72-custom-map-server');
}

export default function Serenity772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-72-custom-map-server" />;
}
