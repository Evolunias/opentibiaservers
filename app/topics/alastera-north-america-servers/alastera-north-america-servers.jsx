import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-north-america-servers');
}

export default function AlasteraNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-north-america-servers" />;
}
