import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-98-custom-map-server');
}

export default function Sabrehaven1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-98-custom-map-server" />;
}
