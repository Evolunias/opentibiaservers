import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-north-america-server');
}

export default function TibiantisNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-north-america-server" />;
}
