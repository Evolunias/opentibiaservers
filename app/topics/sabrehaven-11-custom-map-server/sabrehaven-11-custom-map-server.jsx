import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-11-custom-map-server');
}

export default function Sabrehaven11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-11-custom-map-server" />;
}
