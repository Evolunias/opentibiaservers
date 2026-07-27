import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-9-6-custom-map-server');
}

export default function Sabrehaven96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-9-6-custom-map-server" />;
}
