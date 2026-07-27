import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-98-custom-map-servers');
}

export default function Originaltibia1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-98-custom-map-servers" />;
}
