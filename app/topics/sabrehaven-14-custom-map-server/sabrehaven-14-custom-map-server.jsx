import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-14-custom-map-server');
}

export default function Sabrehaven14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-14-custom-map-server" />;
}
