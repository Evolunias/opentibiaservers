import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-6-custom-map-servers');
}

export default function Originaltibia86CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-6-custom-map-servers" />;
}
