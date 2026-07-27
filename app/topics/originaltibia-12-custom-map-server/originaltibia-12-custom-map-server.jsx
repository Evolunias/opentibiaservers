import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-12-custom-map-server');
}

export default function Originaltibia12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-12-custom-map-server" />;
}
