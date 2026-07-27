import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-14-real-map-servers');
}

export default function Originaltibia14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-14-real-map-servers" />;
}
