import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-15-custom-map-server');
}

export default function Sabrehaven15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-15-custom-map-server" />;
}
