import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-12-custom-map-server');
}

export default function Sabrehaven12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-12-custom-map-server" />;
}
