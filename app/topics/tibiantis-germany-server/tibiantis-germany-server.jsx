import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-germany-server');
}

export default function TibiantisGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-germany-server" />;
}
