import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-14-real-map-servers');
}

export default function Sabrehaven14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-14-real-map-servers" />;
}
