import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-4-custom-map-servers');
}

export default function Originaltibia84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-4-custom-map-servers" />;
}
