import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-south-america-server');
}

export default function AlasteraSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-south-america-server" />;
}
