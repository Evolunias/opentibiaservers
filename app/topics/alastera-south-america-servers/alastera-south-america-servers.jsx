import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-south-america-servers');
}

export default function AlasteraSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-south-america-servers" />;
}
