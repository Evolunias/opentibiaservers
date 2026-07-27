import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-0-custom-map-server');
}

export default function Sabrehaven100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-0-custom-map-server" />;
}
