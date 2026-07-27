import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-north-america-servers');
}

export default function TibiantisNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-north-america-servers" />;
}
