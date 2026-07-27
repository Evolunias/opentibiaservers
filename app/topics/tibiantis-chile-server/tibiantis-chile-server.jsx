import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-chile-server');
}

export default function TibiantisChileServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-chile-server" />;
}
