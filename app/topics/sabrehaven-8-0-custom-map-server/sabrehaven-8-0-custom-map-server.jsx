import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-0-custom-map-server');
}

export default function Sabrehaven80CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-0-custom-map-server" />;
}
