import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-14-custom-map-server');
}

export default function Serenity14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-14-custom-map-server" />;
}
