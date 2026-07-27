import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-13-custom-map-server');
}

export default function Sabrehaven13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-13-custom-map-server" />;
}
