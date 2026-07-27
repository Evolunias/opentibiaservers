import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-6-custom-map-servers');
}

export default function Originaltibia76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-6-custom-map-servers" />;
}
