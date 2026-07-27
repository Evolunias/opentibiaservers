import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-1-custom-map-server');
}

export default function Sabrehaven81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-1-custom-map-server" />;
}
