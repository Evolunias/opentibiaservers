import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-14-custom-map-servers');
}

export default function Originaltibia14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-14-custom-map-servers" />;
}
