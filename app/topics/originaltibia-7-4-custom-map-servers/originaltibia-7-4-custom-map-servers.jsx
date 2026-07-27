import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-4-custom-map-servers');
}

export default function Originaltibia74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-4-custom-map-servers" />;
}
