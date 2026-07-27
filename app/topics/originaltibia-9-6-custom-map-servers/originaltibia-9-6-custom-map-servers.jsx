import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-9-6-custom-map-servers');
}

export default function Originaltibia96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-9-6-custom-map-servers" />;
}
