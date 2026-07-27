import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-north-america-server');
}

export default function AlasteraNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-north-america-server" />;
}
