import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-0-custom-map-server');
}

export default function Originaltibia100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-0-custom-map-server" />;
}
