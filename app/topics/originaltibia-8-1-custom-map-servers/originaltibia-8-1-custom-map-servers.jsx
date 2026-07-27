import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-1-custom-map-servers');
}

export default function Originaltibia81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-1-custom-map-servers" />;
}
