import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-10-0-custom-map-server');
}

export default function Unline100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="unline-10-0-custom-map-server" />;
}
