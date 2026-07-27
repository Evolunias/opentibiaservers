import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-chile-servers');
}

export default function TibiantisChileServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-chile-servers" />;
}
