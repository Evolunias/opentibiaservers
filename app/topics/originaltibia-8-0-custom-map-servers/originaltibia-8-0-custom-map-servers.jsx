import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-0-custom-map-servers');
}

export default function Originaltibia80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-0-custom-map-servers" />;
}
