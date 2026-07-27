import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-15-custom-map-server');
}

export default function Originaltibia15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-15-custom-map-server" />;
}
