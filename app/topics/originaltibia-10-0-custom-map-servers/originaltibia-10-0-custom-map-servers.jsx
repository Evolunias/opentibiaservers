import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-0-custom-map-servers');
}

export default function Originaltibia100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-0-custom-map-servers" />;
}
