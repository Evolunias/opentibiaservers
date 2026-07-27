import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-12-custom-map-servers');
}

export default function Originaltibia12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-12-custom-map-servers" />;
}
