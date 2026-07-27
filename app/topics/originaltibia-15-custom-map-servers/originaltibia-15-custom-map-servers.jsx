import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-15-custom-map-servers');
}

export default function Originaltibia15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-15-custom-map-servers" />;
}
