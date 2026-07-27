import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-0-real-map-servers');
}

export default function Originaltibia80RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-0-real-map-servers" />;
}
