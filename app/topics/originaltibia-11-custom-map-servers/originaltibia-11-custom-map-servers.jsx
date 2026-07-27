import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-11-custom-map-servers');
}

export default function Originaltibia11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-11-custom-map-servers" />;
}
